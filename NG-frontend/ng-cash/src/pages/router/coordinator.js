export const goToSignup = (navigate) =>{
    navigate("/signup")
}

export const goToLogin = (navigate) =>{
    navigate("/")
}

export const goToHome = (navigate, accountId) =>{
    navigate(`/home/${accountId}`)
}

export const goToExtract = (navigate, id) =>{
    navigate(`/extract/${id}`)
}

export const goToPayment = (navigate, id) =>{
    navigate(`/payment/${id}`)
}