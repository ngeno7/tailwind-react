import React from "react";

export const Table = () => 
            <table className="w-full p-5 text-gray-700">
                <thead>
                    <tr>
                        <th className="text-left text-gray-600">Name</th>
                        <th className="text-left text-gray-600">Side</th>
                        <th className="text-left text-gray-600">Role</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Obi Wan Kenobi</td>
                        <td>Light</td>
                        <td>Jedi</td>
                    </tr>
                    <tr>
                        <td>Greedo</td>
                        <td>South</td>
                        <td>Scumbag</td>
                    </tr>
                    <tr>
                        <td>Darth Vader</td>
                        <td>Dark</td>
                        <td>Sith</td>
                    </tr>                                   
                </tbody>
            </table>