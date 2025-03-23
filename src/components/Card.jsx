const Card = ({ children, styles }) => {
  return (
    <div
      className={`p-4 border-2 border-gray-200 rounded-lg shadow-xl ${styles}`}
    >
      {children}
    </div>
  )
}
export default Card
