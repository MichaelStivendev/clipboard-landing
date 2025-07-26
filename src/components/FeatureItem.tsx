
export default function FeatureItem({title , description }:{title:string, description: string}){
    return(  
       <div className="feature-item" >
          <h3>
            {title}
          </h3>
          <p>{description}</p>
       </div>
    )
}

