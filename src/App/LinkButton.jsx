

export default function LinkButton({ url, id, text }) {
  return (
    <li className="btn-link">
      <a href={url} id={id} className='btn-link__a'>{text}</a>
    </li>
  )
}
LinkButton.defaultProps = {
  url: `https://training.zuri.team/`,
  id: `btn__zuri`,
  text: 'Default'
}
