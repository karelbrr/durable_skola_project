const Footer = () => {
    return ( <section>
        <div className="bg-fifth bg-no-repeat bg-cover h-[600px]"></div>
        <div className="h-[312px] flex flex-col lg:flex-row justify-between lg:items-center">
            <h3 className="mt-10 ml-10 text-2xl font-bold lg:pl-24 lg:mt-0">Modea</h3>
            <p className="ml-10 mb-10 lg:pr-24 text-xl font-light">Made with <a className="underline" href="#">Vite</a></p>
        </div>
    </section> );

}
 
export default Footer;