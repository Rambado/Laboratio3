

export const Array = () => {

    const arrayNumeros = [1,5,7,13];

  return (
    <div>
        <ul>
        {arrayNumeros.map((elemento,key) => {
            return(
                <li key = {key}>{elemento}</li>
            )
        })}
        </ul>
    </div>
  )
}
