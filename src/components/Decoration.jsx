export default (props) => {
    return (
        <>
            <div className='snowfall'>
                {Array.from({ length:2 }, (_, index) => (
                    <span key={index}></span>
                ))} 
            </div>
        </>
    )
}