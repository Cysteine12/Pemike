import { useNavigate } from 'react-router'

const ToggleModal = ({ currFeatureType, features }) => {
  const navigate = useNavigate()

  return (
    <div className="mx-auto md:mx-0 p-0.5 mb-5 w-fit flex items-center self-end rounded-lg text-sm text-white bg-gray-600">
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => navigate(feature.url)}
          className={`p-1 btn-sm min-w-20 cursor-pointer ${
            currFeatureType === feature.type && 'bg-white text-gray-600'
          } ${index === 0 && 'rounded-l-lg'} ${
            index + 1 === features.length && 'rounded-r-lg'
          }`}
        >
          {feature.name}
        </button>
      ))}
    </div>
  )
}
export default ToggleModal
