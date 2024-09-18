import React from "react"
import Header from "../components/header"
import SideBar from "../components/sideBar"

const Buy = () => {

    return(
        <div className='h-screen'>
            <Header />
            <div className='sell h-92 flex flex-col sm:flex-row'>
                <SideBar />
                <section className='sm:basis-10/12 box-border overflow-auto px-10 py-4'>
                    <div className="mb-4">
                        <h2 className="" >Aujourd'hui</h2>
                        <table className="w-11/12 bg-t-blue border-collapse">
                            <thead className="border-p-blue border-b-2">
                                <tr>
                                    <th className="">Catégories</th>
                                    <th className="">Articles</th>
                                    <th className="">Prix unitaire</th>
                                    <th className="">Quantité</th>
                                    <th className="">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <h2 className="" >Hier</h2>
                        <table className="w-11/12 bg-t-blue border-collapse">
                            <thead className="border-p-blue border-b-2">
                                <tr>
                                    <th className="">Catégories</th>
                                    <th className="">Articles</th>
                                    <th className="">Prix unitaire</th>
                                    <th className="">Quantité</th>
                                    <th className="">Total</th>
                                </tr>
                            </thead>
                            <tbody className="text-center">
                                <tr>
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr>
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                                <tr className="">
                                    <td className="p-2">Cahier</td>
                                    <td className="p-2">200 pages</td>
                                    <td className="p-2">150</td>
                                    <td className="p-2">10</td>
                                    <td className="p-2">1500</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                </section>
            </div>
        </div>
    )
}

export default Buy