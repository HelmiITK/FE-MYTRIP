
const AboutEtcComponent = () => {
   return (
      <div className="flex gap-8 justify-center mx-44 mt-14">
         <div className="flex flex-col gap-6 w-1/2">
            {/* About */}
            <div className="flex flex-col gap-4">
               <h2 className="text-center text-2xl font-bold">About</h2>
               <p className="text-base font-semibold">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci dolorem illum
                  facilis delectus nemo voluptatum molestiae consequatur nihil deleniti reprehenderit
                  voluptatem nam aliquid labore itaque temporibus libero, ab iste consectetur. In vel
                  dolores suscipit soluta, facilis quam quae aliquid hic deleniti excepturi nam veniam
                  sed natus, possimus, a magnam amet!
               </p>
            </div>
            {/* vision */}
            <div className="flex flex-col gap-4">
               <h2 className="text-center text-2xl font-bold">Vision</h2>
               <p className="text-base font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel mollitia iusto
                  excepturi eaque beatae, unde laudantium sed assumenda ullam veniam dolorem, magnam,
                  nam nostrum. Omnis quibusdam itaque delectus sed deleniti est labore natus facere,
                  repellat harum nulla! Eos velit illum sed quibusdam! Ratione maiores, ullam deserunt
                  necessitatibus dolores, molestiae repellendus error aliquid rem fuga odit beatae
                  illum, id blanditiis consectetur.
               </p>
            </div>
            {/* mision */}
            <div className="flex flex-col gap-4">
               <h3 className="text-center text-2xl font-bold">Mision</h3>
               <p className="text-base font-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, excepturi quo
                  laudantium doloremque fuga obcaecati corrupti quae nulla voluptatibus atque possimus
                  odio exercitationem, necessitatibus veniam temporibus suscipit? Fuga numquam
                  aspernatur, placeat distinctio earum aliquam, rem pariatur incidunt provident,
                  quaerat omnis.
               </p>
            </div>
         </div>
         <div className="">
            <img
               src={
                  "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueXxlbnwwfHwwfHx8MA%3D%3D"
               }
               alt="gambar company"
               className="rounded-xl shadow-md h-[600px] w-[540px]"
            />
         </div>
      </div>
   )
}

export default AboutEtcComponent