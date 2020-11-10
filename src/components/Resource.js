import cn from 'classnames'

function Resource(props) {
  console.log()
  return (<li className="menu__resource">
      <a href={props.resource.url} target="_blank" rel="noopener"
         className={cn("menu__resource-link", {"menu__resource-link_visible": props.isStreamingOpen})}>{props.resource.title}</a>
    </li>
  )
}

export default Resource
