import { SVGProps } from "react"

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="currentColor"
      
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.6}
      d="M16.666 5 7.5 14.167 3.333 10"
    />
  </svg>
)
export default CheckIcon
