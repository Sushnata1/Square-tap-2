export default (props) => {
    return (
        <>
            <div className='snowfall'>
                {Array.from({ length:5 }, (_, index) => (
                    <span key={index}></span>
                ))} 
            </div>
        </>
    )
}