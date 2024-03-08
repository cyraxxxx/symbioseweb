interface Props {
  query: string;
  category: string;
}

const Header = ({ query, category }: Props) => {
  if(query && category) {
    return (
      <h1 className="heading3 self-center text-black-500">
        {/* Search results for "{query}" in <span className="capitalize">{category}</span> */}
        Résultats de recherche pour "{query}" dans <span className="capitalize">{category}</span>
      </h1>
    )
  }

  if(query) {
    return (
      <h1 className="heading3 self-center text-black-500">
        {/* Search results for "{query}" */}
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
    //<h1 className="heading3 self-start text-black-500">No Results</h1>
    
  )
}

export default Header