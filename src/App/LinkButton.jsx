

export default function LinkButton({ url, id, text, title }) {
  return (
    <li>
      <a href={url} id={id} className='btn-link__a' title={title}>{text}</a>
    </li>
  )
}
LinkButton.defaultProps = {
  url: `https://training.zuri.team/`,
  id: `btn__zuri`,
  text: 'Default'
}
