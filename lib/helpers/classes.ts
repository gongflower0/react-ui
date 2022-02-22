function classnames(...name: (string|undefined)[]){
  return name.filter(Boolean).join(' ')
}

export default classnames;