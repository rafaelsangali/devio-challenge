export function Loading() {
  const css = `
  .first-circle{
    animation-delay: 0.2s;
}
  .second-circle{
    animation-delay: 0.3s;
}
  .third-circle{
    animation-delay: 0.2s;
}
`
  return (
    <>
      <div className="flex gap-1">
        <style>{css}</style>
        <div className="bg-primary p-2  w-4 h-4 rounded-full animate-bounce first-circle"></div>
        <div className="bg-primary p-2 w-4 h-4 rounded-full animate-bounce second-circle"></div>
        <div className="bg-primary p-2  w-4 h-4 rounded-full animate-bounce third-circle"></div>
      </div>
    </>
  )
}
