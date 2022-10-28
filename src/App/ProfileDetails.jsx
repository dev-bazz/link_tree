

export default function ProfileDetails({ user }) {
  return (
    <header>
      <div className="profile">
        <div className="profile__wrapper">
          <img src="https://avatars.githubusercontent.com/u/67967265?v=4" alt="" className="profile__img" />
        </div>
        <h1 className="profile__name">
          {user}
        </h1>
      </div>
    </header>
  )
}
ProfileDetails.defaultProps = {
  user: 'Clement'
}
