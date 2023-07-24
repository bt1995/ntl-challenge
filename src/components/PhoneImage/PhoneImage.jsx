import './PhoneImageStyles.css'

const PhoneImage = ({imgUrl, brandName}) => {
  return (
    <div className='item-image-container'>
        <img src={imgUrl} alt={`${brandName} Mobile`} />
    </div>
  )
}

export default PhoneImage