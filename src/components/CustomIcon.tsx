import SvgUri from 'react-native-svg-uri'

const CustomIcon = ({ source, color }) => {
  return <SvgUri height={22} width={22} source={source} fill={color} />
}

export default CustomIcon
