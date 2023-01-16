interface DataTypes {
    labels: string[];
    datasets: [
        {
            type: string;
            label: string;
            backgroundColor: any[];
            data: number[];
            width: string;
            borderWidth: number;
        },
    ];
}
