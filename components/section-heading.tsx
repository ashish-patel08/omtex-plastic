import * as React from "react"

type SectionHeadingProps = {
  children: string
  className?: string
}

export function SectionHeading({ children, className }: SectionHeadingProps) {
  const text = children?.trim() || ""
  const lastSpaceIndex = text.lastIndexOf(" ")
  const before = lastSpaceIndex >= 0 ? text.slice(0, lastSpaceIndex) : ""
  const lastWord = lastSpaceIndex >= 0 ? text.slice(lastSpaceIndex + 1) : text

  return (
    <h2 className={`font-bold font-[family-name:var(--font-playfair)] ${className || ""}`}>
      {before ? (
        <>
          {before}
          {" "}
          <span className="text-primary relative inline-block">
            {lastWord}
          </span>
        </>
      ) : (
        <span className="text-primary relative inline-block">{lastWord}</span>
      )}
    </h2>
  )
}

export default SectionHeading

