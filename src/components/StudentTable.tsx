import { Student } from "@/types/Student";
type Props = {
    students: Student[];
}

export const StudentTable = ({ students }: Props) => {
    return (
        <table className="w-full border border-gray-600 rounded-md overflow-hidden">
            <thead>
                <tr className="text-left border-b border-gray-600 bg-gray-800">
                    <th>Nome</th>
                    <th>Estado</th>
                    <th>Grade 1</th>
                    <th>Grade 2</th>
                    <th>Grade Final</th>
                </tr>
            </thead>
            <tbody>
                {students.map(item =>(
                   <tr key={item.id} className="text-gray-800 bg-gray-400 border-b border-gray-600">
                        <td className="p-3 flex items-center">
                            <img src={item.avatar} className="w-10 h-10 rounded-full mr-3"></img>
                            <div>
                                <div className="font-bold">{item.name}</div>
                                <div>{item.email}</div>
                            </div>
                        </td>
                        <td>
                            {item.active && <div>Ativo</div>}
                            {!item.active && <div>Inativo</div>}
                        </td>
                        <td>
                            {item.grade1}
                        </td>
                        <td>{item.grade2}</td>
                        <td>{item.active? ((item.grade1 + item.grade2)/2).toFixed(1) : '--'}</td>

                   </tr> 
                ))}
            </tbody>
        </table>
    );
}