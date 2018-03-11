function inVisible(e){
	let v=e.hidden;
	if(v!==true){
		v=e.scrollHeight<1;
		if(v!==true){
			const s=e.style;
			let o=s.visibility!=='hidden';
			if(o && (o=getComputedStyle(e),o.getPropertyValue('visibility')!=='hidden')){
				const g=x=>Number(x).toFixed(1)!=='0.0';
				v=g(s.opacity)?false:g(o.getPropertyValue('opacity'))!==true;
			}else{
				v=true;
			};
		};
	};
	return v;
}
