//@ts-check


export default function footer() {
    return (
        <footer className="footer-basic" style={{ height: "342.219px;", background: "white" }}>
            <ul className="list-inline"></ul>
            <footer className="footer-clean" style={{ height: "320.219px", background: "white", color: "rgb(255,255,255);" }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-4 col-md-3 item" style={{ width: "286px;" }}>
                            <h3>Alamat Sekolah :</h3>
                            <p>STIKOM PGRI Banyuwangi</p>
                        </div>
                        <div className="col-sm-4 col-md-3 item" style={{ width: "273px;" }}>
                            <h3>Nomor Admin Perpustakaan :</h3>
                            <p>+62 XXXX XXXX XXXX</p>
                        </div>
                        <div className="col-sm-4 col-md-3 item" style={{ background: "#2E8B57;" }}>
                            <div className="mx-3 d-flex justify-content-between"><img src="/stikom.png" style={{ width: 90, margin:'auto' }} /></div>
                            
                            {/* <img src="/smk.png" alt="Picture of the author" style={{width:'140px', height:'140px', margin:'auto'}} className="d-flex m-auto"/> */}
                            <h3 style={{ marginBottom: "100px;" }}>Dibuat oleh STIKOM PGRI BANYUWANGI</h3>
                        </div>
                    </div>
                    <div className="row" style={{ background: "#2E8B57;" }}>
                        <div className="col-md-12">
                            <p className="copyright">Powered by STIKOM PGRI BANYUWANGI © 2021</p>
                        </div>
                    </div>
                </div>
            </footer>
        </footer>

    )
}