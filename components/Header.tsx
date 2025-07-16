/* interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if(query && category) {
    return (
      <h1 className="heading3 self-center text-black-500">
        Résultats de recherche pour "{query}" dans <span className="capitalize">{category}</span>
      </h1>
    )
  }

  if(query) {
    return (
      <h1 className="heading3 self-center text-black-500">
        Résultats de recherche pour "{query}"
      </h1>
    )
  }

  if(category) {
    return (
      <h1 className="heading3 self-center text-black-500">
        <span className="capitalize">{category}</span>
      </h1>
    )
  }

  return (
    <h1 className="heading3 self-start text-black-500">Aucun résultat</h1>
    
  )
}

export default Header */

interface Props {
  query: string
  category: string
}

const Header = ({ query, category }: Props) => {
  let headingText = 'Ressources'

  if (query && category) {
    headingText = `Résultats de recherche pour "${query}" dans la catégorie "${category}"`
  } else if (query) {
    headingText = `Résultats de recherche pour "${query}"`
  } else if (category) {
    headingText = `Catégorie : ${category}`
  } else {
    headingText = 'Aucun résultat trouvé'
  }

  return (
    <h1 className="heading3 self-center text-black-500" role="heading" aria-level={1}>
      {headingText}
    </h1>
  )
}

export default Header