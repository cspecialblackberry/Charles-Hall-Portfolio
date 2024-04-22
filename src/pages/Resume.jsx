export default function Resume() {
    return (
        <>
            <div className="resume">
                <h1>Click the Link Below to View My Resume!</h1>
                <a target='_blank' href='https://drive.google.com/file/d/17tcyvqdB_4bn7jgmjUsBau7Nssiw4lY5/view?usp=sharing'><h2>Resume</h2></a>
            </div>
            <div className="skills">
                <h1>Charles Hall's Web Development Skills</h1>
               <table>
                <tr>
                    <th>Front End</th>
                    <th> Back End</th>
                    <th>Other</th>
                </tr>
                <tr>
                    <td>HTML</td>
                    <td>Node.js</td>
                    <td>Git + GitHUb</td>
                </tr>
                <tr>
                    <td>CSS</td>
                    <td>Express.js</td>
                    <td>Jest testing</td>
                </tr>
                <tr>
                    <td>JavaScript</td>
                    <td>SQL</td>
                    <td>Insomnia</td>
                </tr>
                <tr>
                    <td>React</td>
                    <td>NoSQL</td>
                    <td>Agile Development</td>
                </tr>
               </table>
            </div>
        </>
    )
}