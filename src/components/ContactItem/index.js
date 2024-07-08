
import './index.css'


  const ContactItem = props => {
    const {contactDetails, toggleIsFavorite} = props
    const {title, Post, isFavorite, id} = contactDetails
  
    const button = isFavorite
      ? 'Submit '
      : 'EDIT'
  
    const onClickFavoriteIcon = () => {
      toggleIsFavorite(id)
    }
  
    
  
    return (
      <li className="table-row">
        <div className="table-cell name-column">
          <p>{title}</p>
        </div>
        <hr className="separator" />
        <div className="table-cell mobile-no-column">
          <p className="mobile-no-value">{Post}</p>
          <button
            type="button"
            className="favorite-icon-container"
            onClick={onClickFavoriteIcon}
          >
           {isFavorite === true ? (
                <div>
                  <p>{button}</p>
                  <button className="butt" type="button" >
                    Edit
                  </button>
                </div>
              ) : (
                <>
                  
                  <button className="butt" type="button" >
                    Save
                  </button>
                </>
              )}
          </button>
        </div>
      </li>
    )
  }

  export default ContactItem
  
 



