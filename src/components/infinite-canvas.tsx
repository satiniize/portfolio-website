"use client"

import type React from "react"
import { useState } from "react"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"
import { Plus, Minus } from "lucide-react"
import { Button } from "@/components/ui/button"

interface CanvasItem {
  id: string
  x: number
  y: number
  content: string
}

const InfiniteCanvas: React.FC = () => {
  const [items, setItems] = useState<CanvasItem[]>([
    { id: "1", x: 0, y: 0, content: "Drag me around!" },
    { id: "2", x: 200, y: 200, content: "Zoom in and out!" },
    { id: "3", x: -200, y: -200, content: "Add more items!" },
  ])

  const addItem = () => {
    const newItem: CanvasItem = {
      id: Date.now().toString(),
      x: Math.random() * 1000 - 500,
      y: Math.random() * 1000 - 500,
      content: "New item",
    }
    setItems([...items, newItem])
  }

  return (
    <div className="w-full h-screen relative overflow-hidden bg-gray-100">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        minScale={0.1}
        maxScale={5}
        limitToBounds={false}
        centerOnInit={true}
      >
        {({ zoomIn, zoomOut }) => (
          <>
            <TransformComponent wrapperClass="w-full h-full" contentClass="w-full h-full">
              <div className="w-[10000px] h-[10000px] relative">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="absolute bg-white p-4 rounded shadow-md cursor-move"
                    style={{ left: item.x, top: item.y }}
                  >
                    {item.content}
                  </div>
                ))}
              </div>
            </TransformComponent>
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <Button onClick={() => zoomIn()}>
                <Plus className="w-4 h-4" />
              </Button>
              <Button onClick={() => zoomOut()}>
                <Minus className="w-4 h-4" />
              </Button>
              <Button onClick={addItem}>Add Item</Button>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  )
}

export default InfiniteCanvas

