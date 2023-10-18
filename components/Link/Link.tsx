export interface LinkProps {
  children?: React.ReactNode
  href?: string
  className?: string
  disabled?: boolean
}

export const Link = ({children, href, className, disabled}:LinkProps)=>{
  return(
    <a href={disabled ? undefined : href} className={`text-primary aria-disabled:text-disabled ${className}`}
      aria-disabled={disabled}
    >{children}</a>
  )
}
export default Link