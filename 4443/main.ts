function compress(chars: string[]): number {
    let index = 0; // Index pour écrire dans le tableau
    let i = 0; // Index pour lire dans le tableau

    while (i < chars.length) {
        let j = i;

        // Trouver la fin du groupe de caractères identiques
        while (j < chars.length && chars[j] === chars[i]) {
            j++;
        }

        // Écrire le caractère et, si nécessaire, le nombre de répétitions
        chars[index++] = chars[i];
        let count = j - i;
        if (count > 1) {
            for (let num of count.toString()) {
                chars[index++] = num;
            }
        }

        // Passer au prochain groupe de caractères
        i = j;
    }

    return index; // La nouvelle longueur du tableau
}
