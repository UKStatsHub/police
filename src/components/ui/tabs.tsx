"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

import { cn } from "@/lib/utils"

function Tabs({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function TabsList({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px] gap-1",
        "bg-[#DEE0E2] dark:bg-[#3A3A3A]",
        className
      )}
      {...props}
    />
  )
}

function TabsTrigger({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        // Base styles
        "inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-3 py-1 text-sm font-semibold whitespace-nowrap transition-all",
        // Inactive state - light mode: dark text on light grey background for good contrast
        "text-[#003087] bg-white/60",
        // Inactive state - dark mode: light text on dark background
        "dark:text-[#F5F0E8] dark:bg-[#2B2B2B]/60",
        // Active state - light mode: white text on dark blue background
        "data-[state=active]:bg-[#003087] data-[state=active]:text-white data-[state=active]:border-[#003087]",
        // Active state - dark mode: dark text on white background
        "dark:data-[state=active]:bg-white dark:data-[state=active]:text-[#003087] dark:data-[state=active]:border-white",
        // Hover state
        "hover:bg-[#003087]/20 dark:hover:bg-white/20",
        // Focus state
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FFDD00] focus-visible:ring-offset-2",
        // Shadow for active
        "data-[state=active]:shadow-sm",
        // Disabled state
        "disabled:pointer-events-none disabled:opacity-50",
        // Icon styles
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      {...props}
    />
  )
}

function TabsContent({
  className,
  ...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }
