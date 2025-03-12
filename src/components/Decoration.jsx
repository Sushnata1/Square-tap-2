export default (props) => {
    return (
        <>
            <div className='snowfall'>
                {Array.from({ length:6 }, (_, index) => (
                    <span key={index}></span>
                ))} 
            </div>
        </>
    )
}