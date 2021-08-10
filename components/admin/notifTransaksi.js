//@ts-check
import useSWR from 'swr'

export default function dashboard() {
    async function fetcher(url) {
        const res = await fetch(url);
        return res.json();
    }
    const host = typeof window !== 'undefined' && window.location.host ? window.location.host : '';
    const http = host === 'localhost:3000' ? 'http' : 'https'
    const url = `${http}://${host}/api/tb_transaksi_notifikasi`;
    const { data, error } = useSWR(url, fetcher, { refreshInterval: 1000 });
    if (error) {
      return <div>error......</div>
    }
    if (!data) {
      return <div>loading......</div>
    }
    return(
        <>
        <p id="notifTransaksi">Jumlah Peminjaman Belum Kembali yang hampir mendekati tanggal tempo peminjaman : {data.length}</p>
        </>
    )
}