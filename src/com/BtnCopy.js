import React, { createRef } from "react"


class BtnCopy extends React.Component {
    state = {
    }
    constructor(props) {
        super(props)
        this.refValue = createRef()
    }
    click(e) {
        var copyText = this.refValue.current;
        console.log(copyText);
        copyText.select();
        copyText.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyText.value);

        // console.log(copyText.value);
    }

    render() {
        return (
            <>
                <button onClick={this.click.bind(this)}>
                    copy
                </button>
                <input value={this.props.value} ref={this.refValue} readOnly style={styles.refValue} />
            </>
        );
    }
}

const styles = {
    refValue: {
        visibility: "hidden",
        width: "1px",
        height: "1px"
    }
}

export default BtnCopy;
