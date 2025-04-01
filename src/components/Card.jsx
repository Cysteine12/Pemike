const Card = ({ children, styles }) => {
  return <div className={`p-4 rounded-lg shadow-2xl ${styles}`}>{children}</div>
}
export default Card
