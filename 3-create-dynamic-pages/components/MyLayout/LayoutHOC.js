import Header from "./../Header/Header";

const layoutStyles = {
    margin:20,
    padding:20,
    border:'1px solid #DDD'
}

const withLayout = Page => {
    return (props) =>(
        <div style={layoutStyles}>
            <Header />
            <Page />
        </div>
    )
}

export default withLayout;