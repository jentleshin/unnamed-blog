const HomeLayout = ({ children }: { children: any }) => {
    return (
        <>
            <div className={"dark:bg-organic dark:text-lime bg-lime text-organic md:min-h-screen"}>
                {children}
            </div>
        </>
    )
}

export default HomeLayout