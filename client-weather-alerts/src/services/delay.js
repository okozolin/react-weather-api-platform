function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


export default function delayedCall( uploaded, setLoader, refreshTable ) {
if (uploaded) {
    setLoader(true)
    delay(3000).then(() => {
        refreshTable()
        setLoader(false)
    })
}
};

