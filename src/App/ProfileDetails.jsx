import shareLD from "../img/Icon.svg"
import shareSd from "../img/Icon(1).svg"
import change from "../img/Icon(2).svg"

export default function ProfileDetails({ user }) {
  return (
    <header>
      <div className="profile">
        
        <div className="profile__wrapper">
          <div className="hovered">
          <img src={change} alt="change Image" />
        </div>
          <img src="https://avatars.githubusercontent.com/u/67967265?v=4" alt="" className="profile__img" id="profile_img"/>
        </div>
        <h1 className="profile__name" id="twitter">
          {user}
        </h1>
        <div id="slack"></div>
      </div>
      <div className="share">
        <img src={shareLD} alt="share" className="ld" />
        <img src={shareSd} alt="share" className="sd" />
      </div>
    </header>
  )
}
ProfileDetails.defaultProps = {
  user: 'Clement'
}
