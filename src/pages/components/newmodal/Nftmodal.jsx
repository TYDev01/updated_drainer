import React, { useRef } from 'react';
import { GoX } from "react-icons/go";
import Image from 'next/image';

function Nftmodal({ onClose, token }) {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            onClose();
        }
    };

    return (
        <div ref={modalRef} onClick={closeModal} className="fixed inset-0 bg-tetiary bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
            <div className="mt-10 flex flex-col gap-5">
                <button onClick={onClose} className="place-self-end"><GoX size={30} /></button>
                <div className="rounded-xl w-80 px-7 py-5 flex flex-col gap-3 items-center mx-2" style={{ background: '#001e3c' }}>
                    {token && token.image ? (
                        <Image src={token.image} alt='token image' width={100} height={100} style={{
                            width: '15rem',
                            height: 'auto',
                            borderRadius: '5%',
                        }} />
                    ) : (
                        <p>No image available</p>
                    )}
                    {token && token.title && <h2>{token.title}</h2>}
                    {token && token.price && (
                        <p>
                            <span className="text-red">Price</span>: <span className="text-notwhite">{token.price}</span>
                        </p>
                    )}
                    {token && token.volume && (
                        <p>
                            <span className="text-red">Volume</span>: <span className="text-notwhite">{token.volume}</span>
                        </p>
                    )}
                    {token && token.value !== undefined && <p>Value: {token.value}%</p>}
                </div>
            </div>
        </div>
    );
}

export default Nftmodal;
