

const Error = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <p className="font-semibold text-red-800 text-2xl">Sorry!! Something Went Wrong!!!</p>
            <h2 className="font-black py-10 text-4xl text-[tomato]">40 + 4 = 404</h2>
            <p className="font-normal text-red-500 text-2xl">The Page You Are Looking For is Missing, Misspelled or Does not Exist!</p>

        </div>
    );
};

export default Error;