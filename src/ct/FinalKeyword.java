package ct;
public class FinalKeyword {
	public static void main(String[] args) {
		final String subject = "JAVA";
		int marks = 80;
		System.out.println("subject = " + subject + ", marks = " + marks);
		//subject = "C";
		marks = 85;
		System.out.println("subject = " + subject + ", marks = " + marks);
	}
}