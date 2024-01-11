const HomeLayout = ({ children }: { children: any }) => {
    return (
        <>
            <div className={"dark:bg-organic dark:text-lime bg-lime text-organic pb-[500px] md:min-h-screen"}>
                {children}
            </div>
        </>
    )
}

export default HomeLayout