
export default function Checkbox() {



    return (
        <>
            <div className="checkbox-container">
                <p>Hva er bra med den lille prinsen?</p>
                <form>
                    <label><input type="checkbox" />Spennende</label>

                    <label><input type="checkbox" />Lærerik</label>

                    <label><input type="checkbox" />filosofien</label>

                    <label><input type="checkbox" />annet</label>
                </form>
            </div>
        </>

    )
}