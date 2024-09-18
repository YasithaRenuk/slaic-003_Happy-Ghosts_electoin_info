import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

// Define the styles for each variant including the new "custom" variant
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline:
          "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        // New custom variant with gradient background and styles from your original button
        custom: 
          "px-8 py-4 rounded-full border border-[#FFD358] bg-gradient-to-b from-[#FFF] to-[#FFF] shadow-md hover:bg-gradient-to-b hover:from-[#f9f9f9] hover:to-[#f9f9f9] text-red-950",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {/* Conditionally add SVG icon if "custom" variant is selected */}
        {variant === "custom" && (
          <span className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
              <path d="M8.8924 5.87292L3.2924 11.8729C3.23302 11.9366 3.1545 11.9791 3.06877 11.994C2.98304 12.009 2.89477 11.9956 2.81734 11.9559C2.73991 11.9161 2.67755 11.8522 2.63973 11.7739C2.6019 11.6955 2.59067 11.6069 2.60773 11.5216L3.34103 7.8551L0.459509 6.77454C0.397933 6.75145 0.342999 6.71353 0.299572 6.66415C0.256145 6.61476 0.225563 6.55543 0.210535 6.49141C0.195507 6.42739 0.196496 6.36065 0.213415 6.2971C0.230333 6.23355 0.26266 6.17515 0.307531 6.12707L5.90754 0.127069C5.96692 0.0634483 6.04543 0.0209292 6.13116 0.00596116C6.21689 -0.00900684 6.30517 0.00439291 6.3826 0.044128C6.46002 0.0838632 6.52238 0.147766 6.56021 0.226143C6.59803 0.30452 6.60927 0.393096 6.59221 0.478435L5.8589 4.14489L8.74043 5.22546C8.802 5.24855 8.85694 5.28647 8.90036 5.33585C8.94379 5.38523 8.97437 5.44456 8.9894 5.50859C9.00443 5.57261 9.00344 5.63935 8.98652 5.7029C8.9696 5.76645 8.93727 5.82485 8.8924 5.87292Z" fill="url(#paint0_linear_256_31)"/>
              <defs>
                <linearGradient id="paint0_linear_256_31" x1="4.59997" y1="0" x2="4.59997" y2="12" gradientUnits="userSpaceOnUse">
                  <stop offset="0.035" stopColor="#C80000"/>
                  <stop offset="1" stopColor="#A40808"/>
                </linearGradient>
              </defs>
            </svg>
          </span>
        )}
        {/* Button Text */}
        <span className="button-text">
          {props.children}
        </span>
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
