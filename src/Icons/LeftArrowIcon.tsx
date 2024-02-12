interface IconType {
  color: string
}

const LeftArrowIcon: React.FC<IconType> = (props) => {
  const { color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="15"
      fill="none"
      viewBox="0 0 9 15"
    >
      <path
        fill={color}
        d="M9 1.762L3.437 7.5 9 13.238 7.287 15 0 7.5 7.287 0 9 1.762z"
      ></path>
    </svg>
  )
}

export default LeftArrowIcon
