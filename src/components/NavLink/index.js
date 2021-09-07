import LinkS from 'react-scroll/build/npm/modules/components/Link'

const NavLink = ({ to, onClick, offset, children }) => {
  return (
    <LinkS
      to={to}
      offset={offset}
      onClick={onClick}
      spy={true}
      smooth={true}
      duration={500}
    >
      <span>{children}</span>
    </LinkS>
  )
}

export default NavLink
