import { useLoaderData } from "react-router-dom";
import Cliente from "../components/cliente";

export function loader() {
    const clientes = [
        {
            id: 1,
            nombre: 'Diego',
            telefono: 102013313,
            email: "diego@gmail.com",
            empresa: 'DiegoAguiLop SA'
        },
        {
            id: 2,
            nombre: 'Raul',
            telefono: 138198313,
            email: "raul@gmail.com",
            empresa: 'DiegoAguiLop SA'
        },
        {
            id: 3,
            nombre: 'Manolo',
            telefono: 31983913,
            email: "manolo@gmail.com",
            empresa: 'DiegoAguiLop SA'
        },
        {
            id: 4,
            nombre: 'Lucia',
            telefono: 319381983,
            email: "lucia@gmail.com",
            empresa: 'DiegoAguiLop SA'
        },
        {
            id: 5,
            nombre: 'David',
            telefono: 1398198938,
            email: "david@gmail.com",
            empresa: 'DiegoAguiLop SA'
        },
    ];

    return clientes;
}

function Index() {
    const clientes = useLoaderData();

    return (
        <>
            <h1 className="font-black text 4-xl text-blue-900">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>

            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Cliente</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {clientes.map(cliente => (
                            <Cliente 
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">No hay Clientes aún</p>
            )}
        </>
    )
}

export default Index