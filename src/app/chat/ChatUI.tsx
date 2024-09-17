"use client";

import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState } from "react";
import ChatBubble from "@/components/ChatBubble";
import ComparisonBubble from "@/components/ComparisonBubble";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// CSS for background gradient and layout
const styles = {
  container: {
    background: "linear-gradient(to bottom, #2b0000, #000000)", // Dark red to black gradient
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  chatBox: {
    width: "100%",
    maxWidth: "850px",
    borderRadius: "2rem",
    overflow: "hidden",
  },
  chatInputArea: {
    background: "rgba(255, 255, 255, 0.1)", // Light transparent background
    borderRadius: "2rem",
    padding: "1rem",
    display: "flex",
    alignItems: "center",
  },
  sendButton: {
    backgroundColor: "#ffffff",
    borderRadius: "50%",
    padding: "0.5rem",
    marginLeft: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollArea: {
    maxHeight: "600px",
    overflowY: "scroll" as "scroll", // Explicitly cast as string 'scroll'
    paddingBottom: "1rem",
  } as React.CSSProperties, // Cast the object to React.CSSProperties
};

const ChatUi = () => {
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useState<any[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const userMessage = { id: nanoid(), role: "human", display: input };

    setInput("");
    setConversation((currentConversation) => [
      ...currentConversation,
      userMessage,
    ]);

    try {
      const chatHistory = [
        ...conversation.map((msg) => ({
          role: msg.role === "human" ? "human" : "assistant",
          input: msg.role === "human" ? msg.display : undefined,
          output: msg.role === "assistant" ? msg.display : undefined,
          type: msg.type,
          ComparisonArray: msg.ComparisonArray,
          keyPoints: msg.keyPoints,
        })),
        { role: "human", input },
      ];

      const response = await axios.post("http://localhost:3000/query", {
        input: input,
        chat_history: chatHistory,
      });

      const message = response.data.response;

      const assistantMessage = {
        id: nanoid(),
        role: "assistant",
        type: message.type,
        display: message.output,
        ComparisonArray: message.ComparisonArray,
        keyPoints: message.keyPoints,
        title: message.title,
      };

      setConversation((currentConversation) => [
        ...currentConversation,
        assistantMessage,
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.chatBox}>
        <div ref={scrollRef} style={styles.scrollArea}>
          {conversation.map((message: any) => (
            <div
              key={message.id}
              className={`flex w-full ${
                message.role === "human" ? "justify-end" : ""
              }`}
            >
              {message.type === "Comparison" ? (
                <ComparisonBubble
                  title={message.title}
                  ComparisonArray={message.ComparisonArray}
                  keyPoints={message.keyPoints}
                />
              ) : (
                <ChatBubble
                  key={message.id}
                  message={message.display}
                  sender={message.role}
                />
              )}
            </div>
          ))}
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex justify-center p-3">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[850px] flex"
            style={styles.chatInputArea}
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 p-3 resize-none border-0 shadow-none focus-visible:ring-0"
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
            />
            <div style={styles.sendButton}>
              <Button
                type="submit"
                size="sm"
                className="p-2 rounded-full bg-white"
              >
                ✈️ {/* You can replace this with an actual paper plane icon */}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatUi;
