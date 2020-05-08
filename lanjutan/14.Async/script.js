function cobaPromise() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Selesai')
        }, 2000)
    })
}

async function cobaAsync() {
    const coba = await cobaPromise();
    console.log(coba);
}

cobaAsync();