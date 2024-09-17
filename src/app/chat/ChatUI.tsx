"use client";

import axios from "axios";
import { nanoid } from "nanoid";
import { useEffect, useRef, useState, memo } from "react";
import ChatBubble from "@/components/ChatBubble";
import ComparisonBubble from "@/components/ComparisonBubble";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

// Extracted CSS styles for cleaner JSX
const containerStyle = {
  background: "linear-gradient(to bottom, #2b0000, #000000)",
  minHeight: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const chatBoxStyle = {
  width: "100%",
  maxWidth: "850px",
  borderRadius: "2rem",
  overflow: "hidden",
};

const chatInputAreaStyle = {
  background: "rgba(255, 255, 255, 0.1)",
  borderRadius: "2rem",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
};

const sendButtonStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "50%",
  padding: "0.5rem",
  marginLeft: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const scrollAreaStyle: React.CSSProperties = {
  maxHeight: "600px",
  overflowY: "scroll",
  paddingBottom: "1rem",
};

// Memoized ChatBubble to prevent re-renders if the message prop doesn't change
const MemoizedChatBubble = memo(({ message }: any) => (
  <ChatBubble message={message.display} sender={message.role} />
));

const MemoizedComparisonBubble = memo(({ message }: any) => (
  <ComparisonBubble
    title={message.title}
    ComparisonArray={message.ComparisonArray}
    keyPoints={message.keyPoints}
  />
));

const ChatUi = () => {
  const [input, setInput] = useState<string>("");
  const [conversation, setConversation] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
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
    setConversation((prev) => [...prev, userMessage]);

    setLoading(true);

    try {
      const chatHistory = conversation.map((msg) => ({
        role: msg.role === "human" ? "human" : "assistant",
        input: msg.role === "human" ? msg.display : undefined,
        output: msg.role === "assistant" ? msg.display : undefined,
        type: msg.type,
        ComparisonArray: msg.ComparisonArray,
        keyPoints: msg.keyPoints,
      }));

      const response = await axios.post("http://localhost:3000/query", {
        input: input,
        chat_history: [...chatHistory, { role: "human", input }],
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

      setConversation((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={containerStyle}>
      <div style={chatBoxStyle}>
        <div ref={scrollRef} style={scrollAreaStyle}>
          {conversation.map((message) => (
            <div
              key={message.id}
              className={`flex w-full ${
                message.role === "human" ? "justify-end" : ""
              }`}
            >
              {message.type === "Comparison" ? (
                <MemoizedComparisonBubble message={message} />
              ) : (
                <MemoizedChatBubble message={message} />
              )}
            </div>
          ))}

          {/* Show loading skeleton when waiting for response */}
          {loading && (
            <div className="flex w-full">
              <div className="w-full h-12 rounded-lg my-2 bg-gray-300">
                <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="fixed bottom-0 left-0 right-0 flex justify-center p-3">
          <form
            onSubmit={handleSubmit}
            className="w-full md:w-[850px] flex"
            style={chatInputAreaStyle}
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 p-3 resize-none border-0 shadow-none focus-visible:ring-0"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
            />
            <div style={sendButtonStyle}>
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
