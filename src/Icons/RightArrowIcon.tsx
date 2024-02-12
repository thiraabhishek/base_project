interface IconType {
  color: string
}

const RightArrowIcon: React.FC<IconType> = (props) => {
  const { color } = props

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="10"
      height="15"
      fill="none"
      viewBox="0 0 10 15"
    >
      <path
        fill={color}
        d="M0 13.238L6.18 7.5 0 1.763 1.903 0 10 7.5 1.903 15 0 13.238z"
      ></path>
    </svg>
  )
}

export default RightArrowIcon
