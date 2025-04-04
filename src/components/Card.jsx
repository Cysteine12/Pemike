const Card = ({ children, styles }) => {
  return (
    <div className={`p-4 rounded-2xl shadow-2xl ${styles}`}>{children}</div>
  )
}
export default Card
